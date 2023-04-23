import { IonGrid, IonRow, IonCol } from '@ionic/react';
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
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
        
      <IonCard id = "card1">

        <IonCardHeader id = "helpPlease">
          <IonGrid>
            <IonRow>
              <IonCardSubtitle><div id="cardtext"><i>coming up...</i></div></IonCardSubtitle>
            </IonRow>
            <IonRow>
              <IonCardSubtitle><div id="timeleft">00:54:38</div></IonCardSubtitle>
            </IonRow>
            <div id = "pleaseHelp">
              <IonCardSubtitle><div id="cardtext"><i>until </i></div></IonCardSubtitle>
              <IonCardSubtitle><div id="classcode">COM SCI M146</div></IonCardSubtitle>
            </div>
              {/* <IonCol>
                <IonCardSubtitle><div id="cardtext"><i>until</i></div></IonCardSubtitle>
              </IonCol>
              <IonCol>
                <IonCardSubtitle><div id="classcode">COM SCI M146</div></IonCardSubtitle>
              </IonCol> */}
          </IonGrid>




          {/* <IonCardSubtitle><div id="cardtext"><i>coming up</i></div></IonCardSubtitle>
          <IonCardSubtitle><div id="timeleft">00:54:38</div></IonCardSubtitle> */}
          {/* <IonCardSubtitle><div id="cardtext"><i>until</i></div></IonCardSubtitle>
          <IonCardSubtitle><div id="classcode">COM SCI M146</div></IonCardSubtitle>  */}
{/* 
          <IonGrid>
            <IonRow>
              <IonCol size="1">
                <div style={{display: 'flex', justifyContent: 'left', alignItems: 'flex-end', height: '100%'}}>
                  <IonCardSubtitle><div id="cardtext"><i>until</i></div></IonCardSubtitle>
                </div>
              </IonCol>
              <IonCol size="10">
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end', height: '100%'}}>
                  <IonCardSubtitle><div id="classcode">COM SCI M146</div></IonCardSubtitle>
                </div>
              </IonCol>
            </IonRow>
          </IonGrid> */}

        </IonCardHeader>
      </IonCard>
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