def memServer1(req):
    total_memory = 0
    server1_memory = 0

    for request in req:
        if request > 0:
            total_memory += request
            server1_memory += request
        else:
            total_memory += abs(request)
            server1_memory -= abs(request)

    return server1_memory

def main():
    req_size = int(input())
    req = list(map(int, input().split()))

    result = memServer1(req)
    print(result)

def tempfun():
    print('commit testing')

if __name__ == "__main__":
    main()
