export const UserPage = () => {
  
  return (
    <div className='user-container'>
      <div className="profile-picture">
      <img src={"https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjE5NGQwNzBhOTZjOWViYzYzZjBjN2I1MmRhZTNkMTU1MjJmZGE4YSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/3o85xyGspig9UUbHc4/giphy.gif"} alt="Foto de perfil" />
      </div>
      <div className="profile-description">
      <h2>Hi, dear {JSON.parse(localStorage.getItem('currentUser'))[0].username}!</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam facilis commodi, odit, eaque, esse doloribus accusantium consectetur laudantium praesentium nostrum repellendus id nihil saepe nesciunt officiis mollitia sed iste veniam?</p>
      </div>
    </div>
  );
};
