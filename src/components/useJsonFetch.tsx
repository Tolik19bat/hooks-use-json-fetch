import { useState, useEffect } from "react";

// Определяем тип для опций, которые можно передать в fetch
type UseJsonFetchOptions = RequestInit;

// Определяем сам хук, который принимает URL и опции
function useJsonFetch<T>(
  url: string,
  opts?: UseJsonFetchOptions
): [T | null, boolean, Error | null] {
  // Состояние для данных, которые будут получены
  const [data, setData] = useState<T | null>(null);
  // Состояние для индикатора загрузки
  const [loading, setLoading] = useState<boolean>(false);
  // Состояние для ошибки, если она произойдет
  const [error, setError] = useState<Error | null>(null);

  // Используем useEffect для выполнения побочных эффектов - в данном случае для запроса данных
  useEffect(() => {
    // Асинхронная функция для выполнения fetch-запроса
    const fetchData = async () => {
      // Устанавливаем флаг загрузки в true перед началом запроса
      setLoading(true);
      try {
        // Выполняем fetch-запрос
        const response = await fetch(url, opts);
        // Если ответ не ок (код не в диапазоне 200-299), выбрасываем ошибку
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        // Парсим ответ как JSON
        const json = await response.json();
        // Сохраняем данные в состояние
        setData(json);
      } catch (err) {
        // В случае ошибки, сохраняем её в состояние
        setError(err as Error);
      } finally {
        // В любом случае, после завершения запроса, устанавливаем флаг загрузки в false
        setLoading(false);
      }
    };

    // Вызываем функцию для выполнения запроса
    fetchData();
  }, [url, opts]); // Эффект будет выполняться при изменении url или opts

  // Возвращаем данные, флаг загрузки и ошибку
  return [data, loading, error];
}

export default useJsonFetch;
