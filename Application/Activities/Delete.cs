using Domain;
using MediatR;
using Persistence;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Activities
{
    public class Delete
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                _context.Activities.Remove(new Activity { Id = request.Id });
                var wasDeletedSuccessfully = await _context.SaveChangesAsync() > 0;

                if (wasDeletedSuccessfully) return Unit.Value;

                throw new Exception("There was a problem when attempting to delete this record.");
            }
        }
    }
}
