import axios from "axios";

const API = axios.create({
  baseURL: "http://20.244.56.144/test/companies/",
});

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE1MTQ2OTA1LCJpYXQiOjE3MTUxNDY2MDUsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6Ijg3ZjYwNTk4LTNkZDctNDRjMi1iOTcwLTUwZWVkNzZlNmQwNSIsInN1YiI6IjIxMDU5MThAa2lpdC5hYy5pbiJ9LCJjb21wYW55TmFtZSI6IktpaXRVbml2ZXJzaXR5IiwiY2xpZW50SUQiOiI4N2Y2MDU5OC0zZGQ3LTQ0YzItYjk3MC01MGVlZDc2ZTZkMDUiLCJjbGllbnRTZWNyZXQiOiJlR2JxdXBJUFBzblNZQ0hpIiwib3duZXJOYW1lIjoiUm91bml0Iiwib3duZXJFbWFpbCI6IjIxMDU5MThAa2lpdC5hYy5pbiIsInJvbGxObyI6IjIxMDU5MTgifQ.DEEKBihx53ABUOiZGAoSoTzzjTdDO8__Cn8oE3gSF34";

//Products
export const getAllProducts = async (filter) =>
  await API.get(`${filter}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
