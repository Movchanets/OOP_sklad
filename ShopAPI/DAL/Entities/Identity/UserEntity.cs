﻿using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;


namespace DAL.Entities.Identity
{
    public class UserEntity:IdentityUser<long>
    {
        [StringLength(100)]
        public string FirstName { get; set; }
        [StringLength(100)]
        public string LastName { get; set; }
        [StringLength(255)]
        public string Image { get; set; }
        public bool IsBlocked { get; set; }

        public virtual ICollection<UserRoleEntity> UserRoles { get; set; }
        public virtual ICollection<OrderEntity> Orders { get; set; }
        public virtual ICollection<ProductEntity> FavoriteProducts { get; set; }

    }
}
