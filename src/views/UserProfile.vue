<template>
    <div>
        <h2>User Profile</h2>
        <form @submit.prevent="updateProfile">
            <label for="displayName">Display Name:</label>
            <input type="text" v-model="displayName" />

            <label for="profileName">Profile Name:</label>
            <input type="text" v-model="profileName" />

            <label for="profileUrl">Profile URL:</label>
            <input type="text" v-model="profileUrl" />

            <label for="location">Location:</label>
            <input type="text" v-model="location" />

            <label for="avatar">Avatar URL:</label>
            <input type="text" v-model="avatarUrl" />

            <label for="bio">Bio:</label>
            <textarea v-model="bio"></textarea>

            <button type="submit">Update Profile</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            displayName: '',
            profileName: '',
            profileUrl: '',
            location: '',
            avatarUrl: '',
            bio: '',
        };
    },
    methods: {
        updateProfile() {
            // Gọi API hoặc action trong store để cập nhật thông tin người dùng
            // Sau đó, có thể chuyển hướng về trang chủ hoặc hiển thị thông báo cập nhật thành công
        },
    },
};
</script>
