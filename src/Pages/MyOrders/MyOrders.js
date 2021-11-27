import React, { useState, useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Stack,
  Badge,
} from "@chakra-ui/react";
import useAuth from "../../Hooks/useAuth";

function MyOrders() {
  const { user } = useAuth();
  const [orders, setOrder] = useState([]);
  const [orderData, setOrderData] = useState([]);
  const url = `https://grisly-monster-73892.herokuapp.com/orders/${user.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [user]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      fetch(`https://grisly-monster-73892.herokuapp.com/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remainingUsers = orders.filter((order) => order._id !== id);
            setOrder(remainingUsers);
          }
        });
    }
  };

  const handleUpdate = (id) => {
    fetch(`https://grisly-monster-73892.herokuapp.com/ordersData/${id}`)
      .then((res) => res.json())
      .then((data) => setOrderData(data));
    const updatedtour = {
      title: orderData?.title,
      id: orderData?.id,
      _id: orderData?._id,
      price: orderData?.price,
      status: "Confirm",
      Name: orderData?.Name,
      Address: orderData?.Address,
    };

    setOrderData(updatedtour);
    fetch(`https://grisly-monster-73892.herokuapp.com/ordersData/${id}`, {
      method: "PUT",

      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify(orderData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(orderData);
        if (data.modifiedCount > 0) {
          alert("Update Successful");
        }
      });
  };
  console.log(orderData);
  return (
    <div className="p-5">
      <h1 className="fs-1 text-center mb-3">My Orders</h1>
      <Table variant="simple">
        <TableCaption>Manage All Orders</TableCaption>
        <Thead>
          <Tr>
            <Th>User Email</Th>
            <Th>Package name</Th>
            <Th>Address</Th>
            <Th>Status</Th>
            <Th isNumeric>Price</Th>
          </Tr>
        </Thead>
        <Tbody>
          {orders.map((order) => (
            <Tr key={order?._id}>
              <Td>{order?.email}</Td>

              <Td>{order?.title}</Td>
              <Td>{order?.Address}</Td>
              <Td>
                <Stack direction="row">
                  <Badge colorScheme="red">Pending</Badge>
                </Stack>
              </Td>
              <Td isNumeric>{order?.price}</Td>
              <button
                onClick={() => handleDelete(order._id)}
                className="btn btn-danger"
              >
                X
              </button>

              <button
                onClick={() => handleUpdate(order._id)}
                className="btn btn-warning"
              >
                Update
              </button>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
}

export default MyOrders;
