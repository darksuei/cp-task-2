import { Checkbox } from "antd";
import "./Card.css";
import { PlayCircleOutlined, ProfileOutlined } from "@ant-design/icons";
import { Candidate } from "../../Dto";
import { useState, useEffect } from "react";

interface Props extends Candidate {
  active: boolean;
}

const CandidateCard = (candidate: Props) => {
  const { firstName, lastName, age, address, active } = candidate;
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
              Bachelor - {address.city} University {"(2023 - 2023)"}
            </p>

            <div className="hash-tags">
              <p>#{"top_candidate"}</p>
              <p>#{"top_candidate"}</p>
            </div>

            <div className="efres">
              <div className="placement-tag">New York</div>
              <div className="placement-tag">Marketing</div>
              <div className="placement-tag">London</div>
            </div>
          </div>
        </div>
        {age < 35 && (
          <div className="achievements">
            <div>
              <div>
                <PlayCircleOutlined />
                <p>{4}</p>
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
