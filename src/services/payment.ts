export const initiatePayment = async (amount: number) => {
  return new Promise((res) =>
    setTimeout(() => res({ success: true, amount }), 1000)
  );
};