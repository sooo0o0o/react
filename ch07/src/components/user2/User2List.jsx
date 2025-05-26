import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

//데이터 요청함수
const fetchUsers = async () => {
  const response = await axios.get("http://localhost:8080/ch09/user2");
  return response.data;
};

//삭제 요청함수
const deleteUsers = async (uid) => {
  const response = await axios.delete(
    `http://localhost:8080/ch09/user2/${uid}`
  ); //컴포넌트 주소
  return response;
};

export const User2List = () => {
  //기본 state
  //const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  //리액트 쿼리 객체
  const queryClient = useQueryClient();

  {
    /* 리액트 쿼리에서 state 역할 하는 부분
  queryKey 이름을 짓는건데 보통 컴포넌트 명으로 함 */
  }
  //사용자 데이터 불러오기
  const {
    data: users = [], //쿼리 함수가 성공적으로 반환한 데이터
    isLoading, //쿼리 함수가 데이터를 가져오는 중이면 true, 캐시에 있으면 false
    isError, //쿼리 함수가 실행 중 통신 오류가 발생하면 treu
  } = useQuery({
    queryKey: ["User2List"], //쿼리 키 = 통신 식별값
    queryFn: fetchUsers,
    staleTime: 1000 * 60 * 1, //1분
  });

  //삭제 Mutation 정의
  const deleteMutation = useMutation({
    mutationFn: (uid) => deleteUsers(uid),
    onSuccess: () => {
      //목록 쿼리 무효화, QueryKey[User2List] 요청 다시 수행
      queryClient.invalidateQueries(["User2List"]);
    },
  });

  //수정하기
  const modifyHandler = (user) => {
    console.log(user);

    //수정 컴포넌트 전환
    navigate(`/user2/modify?uid=${user.uid}`); //API 주소
  };

  //삭제하기
  const deleteHandler = (user) => {
    //삭제 요청하기
    deleteMutation.mutate(user.uid);
  };

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (isError) {
    return <div>에러 발생...</div>;
  }

  return (
    <div className="User2List">
      <h4>User2:LIST</h4>

      <table border={1}>
        <thead>
          <tr>
            <th>아이디</th>
            <th>이름</th>
            <th>생년월일</th>
            <th>주소</th>
            <th>관리</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.uid}</td>
              <td>{user.name}</td>
              <td>{user.birth}</td>
              <td>{user.addr}</td>
              {/* prettier-ignore */}
              <td>
                <button onClick={() => {modifyHandler(user)}}>:MODIFY</button>
                <button onClick={() => {deleteHandler(user)}}>:DELETE</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
