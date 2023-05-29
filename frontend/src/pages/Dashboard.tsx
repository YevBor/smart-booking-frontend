import { WorkingHours } from '../components/workingHours/WorkingHours';
import Calendar from "../calendar/calendar.tsx";

const Dashboard = () => {
    return (
        <>
            <WorkingHours />
            <div className="container">
                <Calendar/>
            </div>

        </>
    );
}

export default Dashboard;
