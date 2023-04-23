import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab4.css';

const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonImg src = "../../img/eep.jpg" alt="A sleepy boy"></IonImg>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Profile</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Profile" />
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
