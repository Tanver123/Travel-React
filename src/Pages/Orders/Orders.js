import React, { useState, useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";

function Orders() {
  const [orders, setOrder] = useState([]);
  useEffect(() => {
    fetch("https://grisly-monster-73892.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);
  console.log(orders);
  return (
    <div className="p-5">
      <h1 className="fs-1 text-center mb-3">Manage all orders</h1>
      <Table variant="simple">
        <TableCaption>Manage All Orders</TableCaption>
        <Thead>
          <Tr>
            <Th>User Email</Th>
            <Th>Package name</Th>
            <Th>Address</Th>
            <Th isNumeric>Price</Th>
          </Tr>
        </Thead>
        <Tbody>
          {orders.map((order) => (
            <Tr key={order._id}>
              <Td>{order.email}</Td>
              <Td>{order.title}</Td>
              <Td>{order.Address}</Td>
              <Td isNumeric>{order.price}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
}

export default Orders;
