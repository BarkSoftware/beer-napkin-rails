class CreateIssue
  def initialize napkin
    @napkin = napkin
  end

  def self.create! napkin
    new(napkin).create!
  end

  attr_reader :napkin
  delegate :user, to: :napkin

  def temporary_test_repo
    'https://api.github.com/repos/brandonjoyce/specd-testing/issues'
  end

  def create!
    github.post(temporary_test_repo, {
      title: 'Test Napkin',
      body: body,
    })
  end

  def body
    "![Beer Napkin Mockup] (#{image_url})"
  end

  def image_url
    if Settings.storage_method.to_sym == :file
      "#{Settings.beer_napkin_url}#{@napkin.image.url}"
    else
      napkin.image.url
    end
  end

  def github
    @github ||= Github.new(user.token)
  end
end
