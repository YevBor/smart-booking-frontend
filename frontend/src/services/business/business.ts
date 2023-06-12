export const requestBusiness = async () => {
  return await fetch("http://localhost:4000/business", {
    method: "GET",
  }).then((response: Response) => response.json());
};
export const requestBusinessBySlug = async (slug: string) => {
  return await fetch(`http://localhost:4000/business/${slug}`).then(
    (response: Response) => response.json()
  );
};
