import axios from '../config/axiosConfig';

export const handleSendMessage = async (clientUserProfile, adminUserProfile) => {
    try {
        if((clientUserProfile && Object.keys(clientUserProfile)) && (adminUserProfile && Object.keys(adminUserProfile))) {
            const clientUserId = clientUserProfile.userId._id;
            const adminUserId = adminUserProfile.userId._id;
            const response = await axios.post('/conversations', {
                clientUserId,
                adminUserId
            })
        }
      
    } catch(err) {
      console.log(err);
    }
  }