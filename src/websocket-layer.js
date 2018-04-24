import SockJS from 'sockjs-client'
import Stomp from 'stomp-websocket';

export const receiveCalls = (callBack) => {
    const socket = new SockJS('http://localhost:8080/call');
    const stompClient = Stomp.over(socket);

    stompClient.connect({},  () => {
        stompClient.subscribe("/topic/calls", (data) => {
            callBack(JSON.parse(data.body));
        });
    });
};