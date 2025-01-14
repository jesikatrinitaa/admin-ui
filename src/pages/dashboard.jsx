import Card from "../component/Card";
import MainLayout from "../component/Layout/MainLayout";

const DashboardPage = () => {
  return (
    <MainLayout type="dashboard">
      {/* top content start */}
      <div className="mb-4 sm:flex sm:gap-6">
        <div className="mb-4 sm:w-1/3">
          <Card />
        </div>
        <div className="mb-4 sm:w-1/3">
          <Card />
        </div>
        <div className="mb-4 sm:w-1/3">
          <Card />
        </div>
      </div>
      <div className="sm:flex sm:gap-6">
        <div className="mb-4 sm:w-1/3">
          <Card />
        </div>
        <div className="sm:w-2/3">
          <div className="mb-4">
            <Card />
          </div>
          <div className="mb-4">
            <Card />
          </div>
        </div>
      </div>
      {/* top content end */}
      {/* bottom content start */}
    </MainLayout>
  );
};

export default DashboardPage;
