import styled from "styled-components";

export const QueueManagementContainer = styled.div`
  margin-top: 65px;
  font-family: sans-serif;
  display: flex;
  border: 1px solid;
  border-radius: 20px;
  flex-direction: column;
  align-items: center;
  background-color: "#e9edf3";
  gap: 50px;
  width: 100%;
  height: 100%;
  padding: 50px;
`;
export const MainWrapper = styled.div`
  display: flex;
  padding: 20px;
  width: 400px;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid;
  border-radius: 20px;
  box-shadow: 10px 10px 5px #aaaaaa;
`;
export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;
export const SendMessageWrapper = styled.div`
  flex-direction: column;
`;
export const GetMessgaeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CurrentMessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
`;

export const QueueInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
export const QueueInput = styled.input`
  width: 50%;
  padding: 0.5rem;
  margin-bottom: 1rem;
`;
export const MessageInput = styled.input`
  width: 50%;
  padding: 0.5rem;
`;
export const ButtonsWrapper = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  align-content: center;
  flex-direction: row;
  justify-content: space-between;
`;
export const StyledButton = styled.button`
  cursor: pointer;
  border: 1px solid;
  padding: 20px;
  border-radius: 20px;
  background-color: bisque;
  font-weight: 500;
  font-size: 14px;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: burlywood;
    box-shadow: 1px 1px 10px 1px;
  }
`;
export const PostMessageButton = styled.button`
  width: 50%;
`;
export const StatusFrame = styled.div`
  display: flex;
  flex-direction: column;
`;
export const StatusWrapper = styled.div`
  font-size: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 400px;
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  box-shadow: 10px 10px 5px #aaaaaa;
  padding: 35px;
`;
export const StatusTitleWrapper = styled.div`
  border: 1px dashed;
  display: flex;
  flex-direction: row;
  gap: 158px;
  align-items: center;
  font-size: 20px;
  justify-content: center;
  height: 25px;
`;
export const CurrentMessage = styled.div`
  text-overflow: ellipsis;
  height: 42px;
  width: 150px;
`;
