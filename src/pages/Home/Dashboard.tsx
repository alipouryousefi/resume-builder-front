import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useResumes } from "../../hooks/useGetResumes";
import DashboardLayout from "../../components/DashboardLayout";
import { LuCirclePlus } from "react-icons/lu";
import { Resume } from "../../types";
import moment from "moment";
import ResumeSummaryCard from "../../components/ResumeSummaryCard";
import { CreateResumeForm, Modal } from "../../components";
const Dashboard = () => {
  const navigate = useNavigate();
  const { data: resumes, isLoading } = useResumes();
  const [openCreateModal, setOpenCreateModal] = useState(false);  

  console.log(resumes);
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-7 pt-1 pb-6 px-4 md:px-0">
        <div
          className="h-[300px] flex flex-col gap-5 items-center justify-center bg-white rounded-lg border border-purple-100 hover:border-purple-300 hover:bg-purple-50/5 cursor-pointer duration-300"
          onClick={() => setOpenCreateModal(true)}
        >
          <div className="w-12 h-12 flex justify-center items-center bg-purple-200/60 rounded-2xl">
            <LuCirclePlus className="text-xl text-purple-600" />
          </div>
          <h3 className="text-lg font-medium text-gray-800">Add New Resume</h3>
        </div>

        {resumes?.map((resume: Resume) => (
          <ResumeSummaryCard
            key={resume._id}
            imgUrl={resume?.thumbnailLink || null}
            title={resume.title}
            lastUpdated={
              resume?.updatedAt
                ? moment(resume.updatedAt).format("DD MMM YYYY")
                : ""
            }
            onSelect={() => navigate(`/resume/${resume._id}`)}
          />
        ))}
      </div>

        <Modal
        isOpen={openCreateModal}
        onClose={() => setOpenCreateModal(false)}
        hideHeader
        >
          <div>
            <CreateResumeForm />
          </div>
          </Modal>

    </DashboardLayout>
  );
};

export default Dashboard;
