import "../styles/notificationcard.css";

const NotificationCard = ({ title, time }) => {
    return (
        <div className="notification-card">
            <div className="notification-icon">🔔</div>

            <div className="notification-content">
                <h4>{title}</h4>
                <p>{time}</p>
            </div>
        </div>
    );
};

export default NotificationCard;