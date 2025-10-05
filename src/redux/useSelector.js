import { useSelector } from "react-redux";

export const useUserSelector = () => {
  const user = useSelector((state) => state.user);
  return {
    userInfo: user.userInfo,
    token: user.token,
    isLoading: user.isLoading,
    error: user.error,
  };
}


// export const useJobSelector = () => {
//   const jobs = useSelector((state) => state.jobs);
//   return {
//     list: jobs.list,
//     selectedJob: jobs.selectedJob,
//     isLoading: jobs.isLoading,
//     error: jobs.error,
//   };
// };


// export const useApplicationSelector = () => {
//   const applications = useSelector((state) => state.applications);
//   return {
//     list: applications.list,
//     isLoading: applications.isLoading,
//     error: applications.error,
//   };
// };