using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.Extensions.Configuration;

namespace AirlineOverrideApp.Models
{
    public partial class AirLineContext : DbContext
    {
        public AirLineContext()
        {
        }

        public AirLineContext(DbContextOptions<AirLineContext> options)
            : base(options)
        {
        }

        public virtual DbSet<AirlineOverride> AirlineOverride { get; set; }
        public virtual DbSet<AirlineOverrideTarget> AirlineOverrideTarget { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                IConfigurationRoot configuration = new ConfigurationBuilder()
                    .SetBasePath(AppDomain.CurrentDomain.BaseDirectory)
                    .AddJsonFile("appsettings.json")
                    .Build();

                string dbstr = configuration.GetConnectionString("DefaultConnection");
                optionsBuilder.UseSqlServer(dbstr);
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<AirlineOverride>(entity =>
            {
                entity.Property(e => e.AirlineOverrideId).HasDefaultValueSql("(newid())");

                entity.Property(e => e.Code)
                    .IsRequired()
                    .HasMaxLength(2)
                    .IsUnicode(false);

                entity.Property(e => e.EndDate).HasColumnType("date");

                entity.Property(e => e.GuaranteedRoi)
                    .HasColumnName("GuaranteedROI")
                    .HasColumnType("decimal(14, 2)");

                entity.Property(e => e.MinRevenue).HasColumnType("decimal(14, 2)");

                entity.Property(e => e.PayingFrom).HasColumnType("decimal(14, 2)");

                entity.Property(e => e.StartDate).HasColumnType("date");
            });

            modelBuilder.Entity<AirlineOverrideTarget>(entity =>
            {
                entity.HasKey(e => e.AirlineOverrideTargetId)
                    .ForSqlServerIsClustered(false);

                entity.Property(e => e.AirlineOverrideTargetId).HasDefaultValueSql("(newid())");

                entity.Property(e => e.HardMaxRoi)
                    .HasColumnName("HardMaxROI")
                    .HasColumnType("decimal(6, 2)");

                entity.Property(e => e.Max).HasColumnType("decimal(6, 2)");

                entity.Property(e => e.MaxRoi)
                    .HasColumnName("MaxROI")
                    .HasColumnType("decimal(6, 2)");

                entity.Property(e => e.Percent).HasColumnType("decimal(6, 2)");

                entity.Property(e => e.Roi)
                    .HasColumnName("ROI")
                    .HasColumnType("decimal(6, 2)");

                entity.HasOne(d => d.AirlineOverride)
                    .WithMany(p => p.AirlineOverrideTarget)
                    .HasForeignKey(d => d.AirlineOverrideId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_AirlineOverrideTarget_AirlineOverride");
            });
        }
    }
}
