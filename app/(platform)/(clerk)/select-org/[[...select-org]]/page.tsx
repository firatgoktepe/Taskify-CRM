import { OrganizationList } from "@clerk/nextjs";

export default function CreateOrganizationPage() {
  return (
    <div>
      <OrganizationList
        hidePersonal
        afterCreateOrganizationUrl={"/organization/:id"}
        afterSelectOrganizationUrl={"/organization/:id"}
      />
    </div>
  );
}
