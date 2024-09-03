import styled from "styled-components";

export const QueueManagementContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 2rem;
`;
export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;
export const CurrentMessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
`;
export const CurrentMessage = styled.p`
  height: 42px;
  width: 150px;
  font-size: 1.5rem;
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
  margin-top: 22px;
  height: inherit;
  width: inherit;
  display: flex;
  align-items: center;
  align-content: center;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 22px;
`;
export const GetQueueButtonWrapper = styled.button`
  width: 50%;
`;
export const GetQueueButton = styled.button`
  width: 50%;
`;
export const PostMessageButtonWrapper = styled.button`
  width: 50%;
  margin-top: 1rem;
`;
export const PostMessageButton = styled.button`
  width: 50%;
`;
export const PostMessageStatus = styled.div`
  font-size: 1.5rem;
  margin-top: 1rem;
`;
export const PostMessageStatusWrapper = styled.div``;
