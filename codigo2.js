 /*notificationsCollection

avatar: string
name: string
content: string
date: string
unread: boolean
type: string(standard / link / message/ picture)
meta?: object
linkType?: string (post /group)
link text?: string
message?: string
picture?: string

*/
const notificationCollection = [
{
   
   avatar: 'C:/Users/reyna/OneDrive/Escritorio/Html/notifications-page-main/notifications-page-main/assets/images/avatar-mark-webber.webp',
   name: 'Mark Webber',
   content: 'reacted to your recent post',
   date: '1m ago',
   unread: true,
   type: 'link',
   meta: {
   	linkType: 'post',
   	linkText: 'My first tournament today!',


   },

   avatar: 'C:/Users/reyna/OneDrive/Escritorio/Html/notifications-page-main/notifications-page-main/assets/images/avatar-angela-gray.webp',
   date: '5m ago',
   name: 'Angela Gray',
   content: 'followed you',
   unread: true,
   type: 'standard',
 },
{
avatar: 'C:/Users/reyna/OneDrive/Escritorio/Html/notifications-page-main/notifications-page-main/assets/images/avatar-jacob-thompson.webp',
date: '1 day ago',
name: 'Jacob Thompson',
content: 'has joined your group',
unread: true, 
type: 'link',
meta: {
  linkType: 'group',
  linkText: 'Chess Club',
},
},

{
  avatar: 'C:/Users/reyna/OneDrive/Escritorio/Html/notifications-page-main/notifications-page-main/assets/images/avatar-rizky-hasanuddin.webp', 
  date: '5 days ago',
  name: 'Rizky Hasanuddin',
  content: 'sent you a private message',
  unread: false,
  type: 'message',
  meta: {
    message:
    'Hello, thanks for setting up the Chess Club. Ive been a member for a few weeks now and Im already having lots of fun and improving my game.',
  },
},

{
  avatar: 'C:/Users/reyna/OneDrive/Escritorio/Html/notifications-page-main/notifications-page-main/assets/images/avatar-kimberly-smith.webp',
  date: '1 week ago ',
  name: 'Kimberly Smith',
  content: 'commented on your picture',
  unread: false,
  type: 'picture',
  meta: {
    picture: 'C:/Users/reyna/OneDrive/Escritorio/Html/notifications-page-main/notifications-page-main/assets/images/image-chess.webp'
  },
},

{
  avatar: 'C:/Users/reyna/OneDrive/Escritorio/Html/notifications-page-main/notifications-page-main/assets/images/avatar-nathan-peterson.webp',
  date: '2 weeks ago',
  name: 'Natahn Peterson',
  content: 'reacted to your recent post',
  unread: false,
  type: 'link',
  meta: {
    linkType: 'post',
    linkText: '5 end-game strategies to increase your win rate',

  },
},

{
  avatar: 'C:/Users/reyna/OneDrive/Escritorio/Html/notifications-page-main/notifications-page-main/assets/images/avatar-anna-kim.webp',
  date: '2 weeks ago',
  name: 'Anna Kim',
  content: 'has left the group',
  unread: false,
  type: 'link',
  meta: {
    linkType: 'group',
    linkText: 'Chess club',
  },
},

]; 


// get dom elements
const mainElement = document.querySelector('.notifications')
const markAllasReadElement = document.querySelector('.header__link') 
const unreadCountElement = document.querySelector('.unread-count')

// listen for click events
markAllasReadElement.addEventListener('click', ()=> {
    markAllasRead()
    resetUnreadCount()
    removeAllNotifications()
showAllNotifications(notificationCollection)
})

//mark all notifications as read
function markAllAsRead() {

 
	//const unreadNotifications = document.querySelector('notifications--unread')
	//unreadNotifications.forEach(notification => notification.classList.remove('notifications--unread'))
    
notificationCollection.forEach(notification.unread = false)
}

function resetUnreadCount () {
	unreadCountElement.textContent='0'

}

// show all notifications
function showAllNotifications(notifications) {
	notifications.forEach(notification =>{

	const notificationElement = composeNotification(notification)
  mainElement.appendChild(notificationElement)		

	})
}

// remove all notifcations
function removeAllNotifications() {
  const allNotificationElements= document.querySelectorAll('notification')
  allNotificationElements.forEach[(notification) => notification.remove()]
}

// compose notification Dom element 

function composeNotification(notification) {
	// noptification wrapper
	const notificationElement = document.createElement('article')
	notificationElement.classList.add('notification')
  if(notification.unread) {
    notificationElement.classList.add('notification--unread')
  }
// avatar
	const avatarElement = document.createElement('img')
	avatarElement.classList.add('avatar')
	avatarElement.alt = notification.name
    avatarElement.src = notification.avatar


    // title

    const titleElement = document.createElement('h2')
    titleElement.classList.add('notification__title')
    let titleContent = '<strong>${notification.name}</strong> ${notification.content}'
    if(notification.type = 'link'){
    	titleContent += ' <a href= "#" class="link link--${notification.meta.linkType}"></a>'
    }


if(notification.unread) {

	titleContent += '<span class="unread-bubble"></span>'



}
titleElement.innerHTML = titleContent

// date
const dateElement = document.createElement('p')
dateElement.classList.add('date')
dateElement.textContent = notification.date

// compose dom element
  notificationElement.appendChild(avatarElement)
  notificationElement.appendChild(titleElement)
  notificationElement.appendChild(dateElement)


 if(notification.type = 'message') {
  notificationElement.classList.add('notification--message')
  const messageElement = document.createElement('p')
  messageElement.classList.add('notification__message')
  messageElement.textContent = notification.meta.message
  notificationElement.appendChild(messageElement)

 }



 if(notification.type = 'picture') {
  notificationElement.classList.add('notification--picture')
  const pictureElement = document.createElement('img')
  pictureElement.classList.add('notification__picture')
  pictureElement.src = notification.meta.picture
  notificationElement.appendChild(pictureElement)
   
 }

  



// return it
  return notificationElement

}

// go
showAllNotifications(notificationCollection)





