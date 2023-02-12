import { flexbox } from '@chakra-ui/system';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
const CustomScheduler = () => {
const data = [{
        Id: 1,
        Subject: 'Morning Shift',
        StartTime: new Date(2023, 1, 5, 0,0),
        EndTime: new Date(2023, 1, 5, 8, 0),
},
{
  Id: 1,
  Subject: ' Afternoon Shift',
  StartTime: new Date(2023, 1, 5, 8,0),
  EndTime: new Date(2023, 1, 5, 16, 0),
},
{
  Id: 1,
  Subject: 'Night Shift',
  StartTime: new Date(2023, 1, 5, 16,0),
  EndTime: new Date(2023, 1, 5, 24, 0),
},
{
  Id: 1,
  Subject: 'Afternoon Shift',
  StartTime: new Date(2023, 1, 6, 8,0),
  EndTime: new Date(2023, 1, 6, 4, 0),
},
{
  Id: 1,
  Subject: 'Night Shift',
  StartTime: new Date(2023, 1, 6, 0,0),
  EndTime: new Date(2023, 1, 6, 3, 0),
},
{
  Id: 1,
  Subject: 'Afternoon Shift',
  StartTime: new Date(2023, 1, 7, 8,0),
  EndTime: new Date(2023, 1, 7, 4, 0),
},
{
  Id: 1,
  Subject: 'Morning Shift',
  StartTime: new Date(2023, 1, 8, 0,0),
  EndTime: new Date(2023, 1, 8, 7, 0),
}
];
return (
    <div id="container" style={{display: 'flex', overflow: 'hidden', flexDirection: 'column'}}>
      <div style={{flexGrow:'1', objectFit: 'contain'}}>
<ScheduleComponent selectedDate={new Date(2023, 1, 5)} eventSettings={{ dataSource: data}} overflow='hidden' c>
<Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
  </ScheduleComponent>
  </div>
	</div>
);
};
export default CustomScheduler