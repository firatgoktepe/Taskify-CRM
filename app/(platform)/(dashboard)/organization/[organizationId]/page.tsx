import { OrganizationSwitcher } from "@clerk/nextjs";

const OrganizationIdPage = () => {
  return (
    <div>
      <OrganizationSwitcher hidePersonal />
    </div>
  );
};

export default OrganizationIdPage;
