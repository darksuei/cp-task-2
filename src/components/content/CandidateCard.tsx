import { Checkbox } from "antd";
import "./Card.css";
import { PlayCircleOutlined, ProfileOutlined } from "@ant-design/icons";
import { Candidate } from "../../Dto";
import { useState, useEffect } from "react";

interface Props extends Candidate {
  active: boolean;
}

const CandidateCard = (candidate: Props) => {
  const { firstName, lastName, age, address, active, university, company } =
    candidate;
  const [checked, setChecked] = useState(active);

  useEffect(() => {
    setChecked(active);
  }, [active]);

  return (
    <div className="candidate-card-container">
      <div className="checkbox">
        <Checkbox
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
      </div>

      <div className="search-card">
        <div className="candidate-all-info">
          <div className="profile">
            <p>{firstName[0] + lastName[0]}</p>
          </div>
          <div className="candidate-about">
            <h3>{firstName + " " + lastName}</h3>
            <h6>{address.address}</h6>
            <p>
              Bachelor - {university} {"(2019 - 2023)"}
            </p>

            <div className="hash-tags">
              <p>#{"top_candidate"}</p>
              <p>#{"professional"}</p>
            </div>

            <div className="efres">
              <div className="placement-tag">{address.city || "New York"}</div>
              <div className="placement-tag">
                {company.department || "Marketing"}
              </div>
              <div className="placement-tag">
                {company.address.city || "London"}
              </div>
            </div>
          </div>
        </div>
        {age < 37 && (
          <div className="achievements">
            <div>
              <div>
                <PlayCircleOutlined />
                <p>{Math.round(Math.random() * 4) + 1}</p>
              </div>
              <div>
                <ProfileOutlined />
                <p>Programs</p>
              </div>
            </div>
            <div></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CandidateCard;
