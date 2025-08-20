// Demo authentication for development purposes
export const demoUser = {
  id: "demo-user-1",
  name: "John Doe",
  email: "john.doe@example.com",
  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

export const createDemoSession = () => ({
  user: demoUser,
  expires: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // 24 hours
});
