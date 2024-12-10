import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import LengthConverter from './LengthConverter';
import TemperatureConverter from './TemperatureConverter';
import TimeConverter from './TimeConverter';
import CurrencyConverter from './CurrencyConverter';

const SwitchConverters =()=> {
  return (
    <Tabs
      defaultActiveKey="Length"
      id="justify-tab-example"
      className="mb-1"
      justify
    >
      <Tab eventKey="Temperature" title="Temperature">
        <TemperatureConverter />
      </Tab>
      <Tab eventKey="Length" title="Length">
        <LengthConverter />
      </Tab>
      <Tab eventKey="Currency" title="Currency">
        <CurrencyConverter />
      </Tab>
      <Tab eventKey="Time" title="Time" >
        <TimeConverter />
      </Tab>

    </Tabs>
  );
}

export default SwitchConverters;