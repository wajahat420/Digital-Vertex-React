import CloudIcon from '@material-ui/icons/Cloud';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import LayersIcon from '@material-ui/icons/Layers';

export default function Cards() {
  return (
    <div>
      <div class="wrapper">
        <section class="row-2">
          <div class="card">
            <div class="inn-card">
            <CloudIcon fontSize="30px"/>
              <h2>Cloud Solutions</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt
              </p>
            </div>
          </div>
          <div class="card">
            <div class="inn-card">
              <OndemandVideoIcon/>
              <h2>Website Solutions</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt
              </p>
            </div>
          </div>
          <div class="card">
            <div class="inn-card">
              <PhoneAndroidIcon/>
              <h2>Mobile App Solutions</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt
              </p>
            </div>
          </div>
          <div class="card">
            <div class="inn-card">
              <LayersIcon/>
              <h2>Amazon Solutions</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
