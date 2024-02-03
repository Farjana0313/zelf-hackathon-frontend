
import axios from 'axios'
import Allpost from '../components/Allpost'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Table from "../components/Table"
import { useEffect, useState } from 'react'

export default function Home() {
    const [tableData, setTableData] = useState([])
  const [error, setError] = useState([])

  // Fetch data from API and set it to the state.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://hackapi.hellozelf.com/frontend/api/v1/contents?page=1');
        setTableData(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);
    return (
        <>
            <Header />
            <Table tableData={tableData}/>
            <Allpost allpost={tableData} />
            <Footer />
        </>
    )
}
