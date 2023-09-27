import { useState, useEffect, useContext } from "react";
import { Checkbox, Divider } from "antd";
import "./Content.css";
import CandidateCard from "./CandidateCard";
import Loading from "./Loading";
import { Candidate } from "../../Dto";
import { AppContext } from "../../context";

const Content = () => {
  const { query, setQuery } = useContext(AppContext);
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [checkedAll, setCheckedAll] = useState(false);
  const [countDisqualified, setCountDisqualified] = useState(0);

  const handleQueryLength = (candidates: any) => {
    const currCandidates = candidates.filter(
      (candidate: any) =>
        candidate.firstName.toLowerCase().includes(query) ||
        candidate.lastName.toLowerCase().includes(query)
    );
    return currCandidates;
  };

  useEffect(() => {
    const result = (() => {
      if (!candidates) {
        return 0;
      } else {
        const check = handleQueryLength(candidates);
        console.log(check);
        return check.reduce(
          (total: number, item: any) => (total += item.age > 30 ? 1 : 0),
          0
        );
      }
    })();
    setCountDisqualified(result);
  }, [query, candidates]);

  useEffect(() => {
    const skip = Math.round(Math.random() * 30);
    skip < 15 ? skip + 10 : skip;
    fetch(`https://dummyjson.com/users?skip=${skip}&limit=90`)
      .then((res) => res.json())
      .then((data) => {
        const users = data.users.map((user: any) => {
          return {
            firstName: user.firstName,
            lastName: user.lastName,
            age: user.age,
            address: user.address,
            university: user.university,
            company: user.company,
          };
        });
        setCandidates(users);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="content">
      <div className="content-header">
        <div className="frame-1">
          <Checkbox
            checked={checkedAll}
            onChange={(e) => setCheckedAll(e.target.checked)}
          />
          <h2>
            {candidates ? handleQueryLength(candidates).length : 0} Candidates
          </h2>
        </div>
        <div className="frame-2">
          <h3>Qualified</h3>
          <Divider type="vertical" />
          <div className="task">
            <h3>Task</h3>
            <div className="tag">
              <p>
                {candidates
                  ? handleQueryLength(candidates).length - countDisqualified
                  : 0}
              </p>
            </div>
          </div>
          <Divider type="vertical" />
          <div className="task">
            <h3>Disqualified</h3>
            <div className="tag">
              <p>{countDisqualified}</p>
            </div>
          </div>
        </div>
      </div>

      {candidates.length > 0 ? (
        candidates
          .filter(
            (candidate: any) =>
              candidate.firstName.toLowerCase().includes(query) ||
              candidate.lastName.toLowerCase().includes(query)
          )
          .map((candidate: any) => (
            <CandidateCard
              key={candidate.id}
              {...candidate}
              active={checkedAll}
            />
          ))
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Content;
