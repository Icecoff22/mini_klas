import { useLocation } from "react-router";
import { useState } from "react";

function LectureMaterialDetailPage() {
  const location = useLocation();
  const [title, setTitle] = useState(location.state.title);
  const [content, setContent] = useState(location.state.content);
  const [materialname, setMaterialname] = useState(location.state.materialname);
  const [materialaddress, setMaterialaddress] = useState(
    location.state.materialaddress
  );
  const [author, setAuthor] = useState(location.state.author);
  const [date, setDate] = useState(location.state.date);

  return (
    <div class="flex flex-col justify-center items-center h-screen border bg-gradient-to-b from-white to-[#C8D6E8]">
      <div class="flex justify-center flex-col items-center h-[600px] w-[1400px] border border-black">
        <div class="flex justify-start w-[90%] h-[10%] mt-4 text-[35px]">
          강의 자료실
        </div>
        <div class="flex justify-start w-[90%] h-[20%] border border-black ">
          <div class="flex flex-col ml-4 mt-4 text-[20px]">
            {title}
            <div class="flex flex-row mt-12 text-[13px]">
              작성자: {author}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;등록일:{date}
            </div>
          </div>
        </div>
        <div class="flex justify-start w-[90%] h-[5%]  border border-dashed border-black ">
          <div class="flex flex-row ml-4 mt-2 text-[13px]">
            첨부파일:&nbsp;&nbsp;&nbsp;
            <a href={materialaddress} download>
              <div className="flex justify-center text-[13px]">
                {materialname}
              </div>
            </a>
          </div>
        </div>
        <div class="flex justify-start w-[90%] h-[50%] border border-black overflow-y-auto ">
          <div class="flex flex-col ml-4  mt-2">
            <div>{content}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LectureMaterialDetailPage;
