import { IonGrid, IonRow, IonCol, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import './fonts.css';
import logo from '../../tattletale.png';
import MyMapComponent from './Mapp';


const Tab1: React.FC = () => {
  return (
    <IonPage>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={logo} alt="My Logo" style={{ height: '100px', width: 'auto' }} />
      </div>

      <IonContent className="ion-padding">
        {/* <h2>hi (name),</h2>
        <h5>you have (num_classes) classes today.</h5> */}
        <h2>Hiiiiiii <b>Stephen</b>,</h2>
        <MyMapComponent />
        <h5>You have <b>3</b> classes today.</h5>

        <IonCard id="card1">
          <IonCardHeader>
            <IonCardSubtitle><div id="current">no ongoing classes!</div></IonCardSubtitle>
            <br></br><br></br>
          </IonCardHeader>
        </IonCard>

        <IonCard id="card1">

          <IonCardHeader id="helpPlease">
            <IonGrid>
              <IonRow>
                <IonCardSubtitle><div id="cardtext"><i>coming up...</i></div></IonCardSubtitle>
              </IonRow>
              <IonRow>
                <IonCardSubtitle><div id="timeleft">00:54:38</div></IonCardSubtitle>
              </IonRow>
              <div id="pleaseHelp">
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




          </IonCardHeader>
        </IonCard>
        <IonHeader collapse="condense">
          <IonToolbar>

          </IonToolbar>
        </IonHeader>
        {/* <ExploreContainer name="Home" /> */}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;