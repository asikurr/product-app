﻿using Microsoft.EntityFrameworkCore;
using ProductApp.Api.Models.Domain;

namespace ProductApp.Api.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Product> Products { get; set; }
    }
}