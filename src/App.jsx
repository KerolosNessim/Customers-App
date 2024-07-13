import { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CustomersTable from "./components/CustomersTable/CustomersTable";
import TransactionChart from "./components/TransactionChart/TransactionChart";

const App = () => {
  const [customers, setCustomers] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  async function getData() {
    const option = {
      url: "/src/customers.json",
      method: "GET",
    };
    let { data } = await axios.request(option);
    setCustomers(data.customers);
    setTransactions(data.transactions);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <h1 className="my-4 text-warning">Customer Transactions</h1>
      <Row>
        <Col md={6}>
          <CustomersTable
            customers={customers}
            transactions={transactions}
            setSelectedCustomer={setSelectedCustomer} 
            selectedCustomer={selectedCustomer}
          />
        </Col>
        <Col md={6}>
          {selectedCustomer && (
            <TransactionChart
              customer={selectedCustomer}
              transactions={transactions}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default App;
