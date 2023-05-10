

@extends("profile.edit")

@section("content")
<div class="order-xl-2 mb-5 mb-xl-0">
  <div class="card card-profile shadow">
   
    <div class="card-body pt-0 pt-md-4">
      <div class="row">
        <div class="col">
        </div>
      </div>
      <div class="text-center">
        <h3>
          {{Auth::user()->name}}</span>
        </h3>
        <div class="h5 mt-4">
          <i class="ni business_briefcase-24 mr-2"></i>{{auth()->user()->email}} 
        </div>
        <div>
        </div>
        <hr class="my-4" />
        <p>{{auth()->user()->name}} — gérer application .</p>
        <p> — {{now()}} — </p>
      </div>
    </div>
  </div>
</div>

<div class="order-xl-1 my-4">
  <div class="card bg-light shadow mb-4">
        @include('profile.partials.update-profile-information-form')
    </div>
  </div>

</div>
@endsection