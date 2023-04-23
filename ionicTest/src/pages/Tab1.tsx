import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import './fonts.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      {/* <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader> */}
      <IonContent className="ion-padding">
        <h2>hi (name),</h2>
        <h5>you have (num_classes) classes today.</h5>
        
      <IonCard><div id="card1">
        <IonCardHeader>
          <IonCardSubtitle><div id="cardtext"><i>coming up</i></div></IonCardSubtitle>
          <IonCardSubtitle><div id="timeleft">00:54:38</div></IonCardSubtitle>
          <IonCardSubtitle><div id="cardtext"><i>until</i></div></IonCardSubtitle>
          <IonCardSubtitle><div id="classcode">COM SCI M146</div></IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>
          Here's a small text description for the card content. Nothing more, nothing less.
        </IonCardContent>
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