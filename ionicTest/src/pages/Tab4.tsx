import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
// import './Tab4.css';
import Profile from './profilee';

const Tab4: React.FC = () => {
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
            <IonTitle size="large">Stats</IonTitle>
            {/* aaaa */}
          </IonToolbar>
        </IonHeader>
        {/* <ExploreContainer name="Statistics" /> */}
        <Profile />
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
