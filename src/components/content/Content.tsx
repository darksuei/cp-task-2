import { useState, useMemo, useEffect } from "react";
import { Checkbox, Divider } from "antd";
import "./Content.css";
import CandidateCard from "./CandidateCard";
import Loading from "./Loading";
import { Candidate } from "../../Dto";

const Content = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [checkedAll, setCheckedAll] = useState(false);

  const countDisqualified = useMemo(() => {
    if (!candidates || !candidates.length) {
      return 0;
    } else {
      return candidates.reduce(
        (total, item) => (total += item.age > 30 ? 1 : 0),
        0
      );
    }
  }, [candidates]);

  useEffect(() => {
    const skip = Math.round(Math.random() * 30);
    skip < 15 ? skip + 10 : skip;
    fetch(`https://dummyjson.com/users?skip=${skip}&limit=90`)
      .then((res) => res.json())
      .then((data) => setCandidates(data.users))
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
          <h2>{candidates.length} Candidates</h2>
        </div>
        <div className="frame-2">
          <h3>Qualified</h3>
          <Divider type="vertical" />
          <div className="task">
            <h3>Task</h3>
            <div className="tag">
              <p>{candidates.length - countDisqualified}</p>
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
        candidates.map((candidate) => (
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
