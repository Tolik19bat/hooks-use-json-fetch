import React from "react";
import useJsonFetch from "./useJsonFetch";

// Компонент для выполнения запроса на успешный URL
const DataComponent: React.FC = () => {
  // Используем хук useJsonFetch для выполнения запроса и получения данных, флага загрузки и ошибки
  const [data, loading, error] = useJsonFetch<{ status: string }>(
    "http://localhost:7070/data"
  );

  // Если данные загружаются, отображаем сообщение о загрузке
  if (loading) return <div>Loading...</div>;
  // Если произошла ошибка, отображаем сообщение об ошибке
  if (error) return <div>Error: {error.message}</div>;
  // Если данные получены, отображаем их
  if (data) return <div>Data: {data.status}</div>;

  // Если ничего из вышеуказанного не выполнено, возвращаем null
  return null;
};

export default DataComponent;
