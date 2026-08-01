import "../styles/roadmap.css";

const RoadmapCard = ({ title, progress }) => {
    return (
        <div className="roadmap-card">

            <div className="roadmap-top">
                <h4>{title}</h4>
                <span>{progress}%</span>
            </div>

            <div className="progress-bar">
                <div
                    className="progress-fill"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>

        </div>
    );
};

export default RoadmapCard;