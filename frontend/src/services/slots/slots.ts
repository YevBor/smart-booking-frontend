import { OpenedSlots } from '../../utils/interfaces';
export const requestMonthlySlots = async (): Promise<OpenedSlots[]> => {
  const token: string | null = localStorage.getItem('token');
  return await fetch('http://localhost:4000/slots', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then((response: Response) => response.json());
};
