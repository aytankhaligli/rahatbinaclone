import React from "react";
import avatar_4 from "../assets/images/avatar-1.jpg";
import avatar_5 from "../assets/images/avatar-2.jpg";
import avatar_3 from "../assets/images/avatar-4.jpg";
import avatar_2 from "../assets/images/avatar-8.jpg";
import avatar_1 from "../assets/images/avatar-9.jpg";

export default function SonTasklar() {
  return (
    <div className="p-6  bg-gray-700 rounded  text-[#AAB8C5] mb-6">
      <h1 className=" text-2xl my-2 font-bold">Son tasklar</h1>
      <table className="w-full border">
        <thead>
          <tr className="">
            <th className="w-[2%] p-4 ">#</th>
            <th className="w-[17%] p-4  border">Taskın adı</th>
            <th className="w-[8%] p-4  border">Üzvlər</th>
            <th className="w-[12%] p-4  border">Layihə</th>
            <th className="w-[12%] p-4  border">
              <div className="flex items-center justify-center">
                <i className="uil uil-schedule mr-2"></i>
                <p>Başlama</p>
              </div>
            </th>
            <th className="w-[12%] p-4  border">
              <div className="flex items-center justify-center">
                <i className="uil uil-schedule mr-2"></i>
                <p>Bitmə</p>
              </div>
            </th>
            <th className="w-[16%]  p-4 border">
              <div className="flex items-center justify-center">
                <i className="uil uil-align-alt mr-2"></i>
                <p>Sub tasklar</p>
              </div>
            </th>
            <th className="w-[12%] p-4  border">
              <div className="flex items-center justify-center">
                <i className="uil uil-comment-message mr-2"></i>
                <p>Şərhlər</p>
              </div>
            </th>
            <th className="w-[12%]  p-4 border">Status</th>
          </tr>
        </thead>
        <tbody className="">
          <tr>
            <th className="border text-center">1</th>
            <td className="text-white p-4 border">
              <a>İş yerlərinin atestatiyası keçirilməyib</a>
            </td>
            <td className=" p-4 border">
              <div className="flex items-center justify-center">
                <img
                  src={avatar_1}
                  alt="profil foto"
                  className="w-6 h-6 rounded-full "
                />
              </div>
            </td>
            <td className="border p-4 text-center">Port Baku Residence</td>
            <td className="border p-4 text-center">15.01.2022</td>
            <td className="border p-4 text-center">22.02.2022</td>
            <td className="border p-4 text-center">3/7</td>
            <td className="border p-4 text-center">21</td>
            <td className="border p-4 text-center">
              <div className=" bg-[#fa5c7c] rounded-full text-xs text-white p-[6px]">
                Gecikir
              </div>
            </td>
          </tr>

          <tr>
            <th className="border text-center">2</th>
            <td className="text-white p-4 border">
              <a>
                Işçilərin fərdi mühafizə vasitələrindən düzgün istifadə etmədiyi
                müşahidə olundu
              </a>
            </td>
            <td className="border p-4">
              <div className="flex items-center justify-center">
                <img
                  src={avatar_2}
                  alt="profil foto"
                  className="w-6 h-6 rounded-full "
                />
              </div>
            </td>
            <td className="border p-4 text-center">Absheron Apartments</td>
            <td className="border p-4 text-center">17.01.2022</td>
            <td className="border p-4 text-center">19.02.2022</td>
            <td className="border p-4 text-center">9/9</td>
            <td className="border p-4 text-center">88</td>
            <td className="border p-4 text-center">
              <div className=" bg-[#0acf97] rounded-full text-xs text-white p-[6px]">
                Tamamlandı
              </div>
            </td>
          </tr>

          <tr>
            <th className="border text-center">3</th>
            <td className="text-white p-4 border">
              <a>
                Lift otağının giriş hissəsində quraşdırılmış nərdivanın qəfəs
                hissəsindəki dəmir hissələrdən bir neçəsi...
              </a>
            </td>
            <td className=" p-4 border">
              <div className="flex items-center justify-center">
                <img
                  src={avatar_3}
                  alt="profil foto"
                  className="w-6 h-6 rounded-full "
                />
              </div>
            </td>
            <td className="border p-4 text-center">Port Baku Tower 1</td>
            <td className="border p-4 text-center">04.01.2022</td>
            <td className="border p-4 text-center">08.02.2022</td>
            <td className="border p-4 text-center">2/5</td>
            <td className="border p-4 text-center">14</td>
            <td className="border p-4 text-center">
              <div className=" bg-[#727cf5] rounded-full text-xs text-white p-[6px]">
                Davam edən
              </div>
            </td>
          </tr>

          <tr>
            <th className="border text-center">4</th>
            <td className="text-white p-4 border">
              <a>
                Rahat Bina App Port baku recidence de sakinlere tehvil verilmesi
              </a>
            </td>
            <td className="border p-4">
              <div className="flex items-center justify-center">
                <img
                  src={avatar_4}
                  alt="profil foto"
                  className="w-6 h-6 rounded-full "
                />
              </div>
            </td>
            <td className="border p-4 text-center">Port Baku Tower 2</td>
            <td className="border p-4 text-center">07.01.2022</td>
            <td className="border p-4 text-center">11.03.2022</td>
            <td className="border p-4 text-center">9/14</td>
            <td className="border p-4 text-center">33</td>
            <td className="border p-4 text-center">
              <div className=" bg-[#fa5c7c] rounded-full text-xs text-white p-[6px]">
                Gecikir
              </div>
            </td>
          </tr>

          <tr>
            <td className="border">5</td>
            <td className="text-white p-4 border">
              <a>Yanğın Təhlükəsizliyi üzrə cavabdeh şəxs təyin edilməmişdir</a>
            </td>
            <td className="border p-4">
              <div className="flex items-center justify-center">
                <img
                  src={avatar_5}
                  alt="profil foto"
                  className="w-6 h-6 rounded-full "
                />
              </div>
            </td>
            <td className="border p-4 text-center">Bilgah Estate</td>
            <td className="border p-4 text-center">01.02.2022</td>
            <td className="border p-4 text-center">10.03.2022</td>
            <td className="border p-4 text-center">6/11</td>
            <td className="border p-4 text-center">65</td>
            <td className="border p-4 text-center">
              <div className=" bg-[#fa5c7c] rounded-full text-xs text-white p-[6px]">
                Gecikir
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
