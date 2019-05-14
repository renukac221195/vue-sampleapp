export function getUserInfo(feed, allUserData) {
    return allUserData.find(u => (u.id == feed.userId));
}
