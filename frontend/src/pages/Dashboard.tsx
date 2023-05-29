import {Calendar} from '../components/UI/calendar';
import { WorkingHours } from '../components/workingHours/WorkingHours';

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
