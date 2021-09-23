import './App.css';
import { Layout } from 'antd';
import Parent from './components/Parent';
import GetPoke from './testComponent/GetPoke';

function App() {
  return (
    <Layout style={{ backgroundColor: "#EC9192" , height: "100vh"}} >
      <GetPoke />
    </Layout>
  );
}

export default App;
