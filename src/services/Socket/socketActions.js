import { CONNECT_SUCCESS } from './socketActionsConstants';

class SocketActions {
  constructor(socket) {
    this.socket = socket;
  }

  onConnectSuccess = () => {
    this.socket.on(CONNECT_SUCCESS, () => {
      console.log('success');
    });
  };
}

export default SocketActions;
