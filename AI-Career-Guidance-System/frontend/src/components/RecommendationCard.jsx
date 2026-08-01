import "../styles/recommendationcard.css";

const RecommendationCard = ({ career, match, skills }) => {
    return (
        <div className="recommendation-card">

            <div className="top">

                <h3>{career}</h3>

                <span>{match}% Match</span>

            </div>

            <div className="skills">

                {skills.map((skill, index) => (
                    <div key={index} className="skill-chip">
                        {skill}
                    </div>
                ))}

            </div>

        </div>
    );
};

export default RecommendationCard;