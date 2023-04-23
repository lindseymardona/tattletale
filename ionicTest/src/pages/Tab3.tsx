import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import MyChart from './Chart';
// import AttendanceChart from './AttendanceChart';
// import AttendanceChart from './Chart';

const Tab3: React.FC = () => {
  
  const data = [
    {
      "name": "Stephen Hwang",
      "num_classes": 6,
      "classes": "EC ENGR M148, COM SCI M146, PSYCH 186A, ETHNMUS 168A, MUS C185B, INDO 3",
      "classes_latlong": "(34.069374533965274, -118.44329783952263), (34.069759380637905, -118.44126764587183), (34.069759380637905, -118.44126764587183), (34.071348425885155, -118.44027534349289), (34.071348425885155, -118.44027534349289), (34.07111890556021, -118.44114499761103)",
      "classes_starttime": "14:00,14:00,13:00,18:00,15:00,11:00",
      "classes_endtime": "15:50,15:50,14:50,19:00,16:50,12:15",
      "classes_days": "(M,W),(M,W),(T,Th),(M,)(M,W),(M,W)",
      "partner_name": "Lindsey",
      "partner_phone": 15109256288,
      "latlong": "(34.0703, -118.4469)",
      "username": "stephenhwang0703",
      "password": "alpacasarecool",
      "total_classes": 132,
      "attended": 79,
      "missed": 53,
      "day_count": 90
    }
  ];
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Stats</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
          
          </IonToolbar>
        </IonHeader>
        Hello, You have been missing classes lately. Please check in with your partner.
        <MyChart />
        {/* <AttendanceChart attended={79} missed={53} /> */}
        {/* <AttendanceChart attended={data[0].attended} missed={data[0].missed} /> */}


      </IonContent>
    </IonPage>
  );
};

export default Tab3;
