import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import './fonts.css';
import logo from '../../tattletale.png';

const Tab1: React.FC = () => {
  return (  
    <IonPage>
      {/* <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader> */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img src={logo} alt="My Logo" style={{ height: '100px', width: 'auto' }} />
    </div>
      <IonContent className="ion-padding">
        {/* <h2>hi (name),</h2>
        <h5>you have (num_classes) classes today.</h5> */}
        <h2>hi <b>stephen</b>,</h2>
        <h5>you have <b>3</b> classes today.</h5>

      <IonCard><div id="card1">
        <IonCardHeader>
          <IonCardSubtitle><div id="current">no ongoing classes!</div></IonCardSubtitle>
          <br></br><br></br>
        </IonCardHeader>
      </div></IonCard>
        
      <IonCard><div id="card1">
        <IonCardHeader>
          <IonCardSubtitle><div id="cardtext"><i>coming up</i></div></IonCardSubtitle>
          <IonCardSubtitle><div id="timeleft">00:54:38</div></IonCardSubtitle>
          <IonCardSubtitle><div id="cardtext"><i>until</i></div></IonCardSubtitle>
          <IonCardSubtitle><div id="classcode">COM SCI M146</div></IonCardSubtitle>
        </IonCardHeader>
      </div></IonCard>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <ExploreContainer name="Home" /> */}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;